import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      data.skills = selectedOption;
      fetch("http://localhost:5000/post-jobs", {
        method: "POST",
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if(result.acknowledged === true ){
          alert("Job Posted Successfully");
        }
        reset();
      });
    };

    const handleSelectChange = (newValue) => {
      console.log("Selected Option:", newValue);
      setSelectedOption(newValue);
    };

    const options = [
      { value: "Javascript", label: "Javascript" },
      { value: "Python", label: "Python" },
      { value: "Java", label: "Java" },
      { value: "C++", label: "C++" },
      { value: "C#", label: "C#" },
      { value: "PHP", label: "PHP" },
      { value: "Ruby", label: "Ruby" },
      { value: "Go", label: "Go" },
      { value: "Rust", label: "Rust" },
    ]

    return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* 1st row */}
              <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Job Title</label>
                  <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="create-job-input" />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Company Name</label>
                  <input type="text" placeholder="Ex: Microsoft" {...register("jobcompanyNameTitle")} className="create-job-input" />
                </div>
              </div>

              {/* 2nd row */}
              <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Minimum Salary</label>
                  <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input" />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Maximum Salary</label>
                  <input type="text" placeholder="$120k" {...register("maxPrice")} className="create-job-input" />
                </div>
              </div>

              {/* 3rd row */}
              <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Salary Type</label>
                 <select {...register("salaryType")} className="create-job-input">
                    <option value="">Choose your salary</option>
                    <option value="hourly">Hourly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                 </select>
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Job Location</label>
                  <input type="text" placeholder="Ex: New York" {...register("jobLocation")} className="create-job-input" />
                </div>
              </div>

              {/* 4th row */}
              <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                  <label className="block mb-2 text-lg">Job Posting Date</label>
                  <input
                     type="date"
                     placeholder="Ex: 2023-10-28"
                     {...register("postingDate")}
                     className="create-job-input"
                     />
                     </div>
              
                     <div className="lg:w-1/2 w-full">
                      <label className="block mb-2 text-lg">Experience Level</label>
                      <select {...register("experienceLevel")} className="create-job-input">
                        <option value="">Choose your experience</option>
                        <option value="NoExperience">Hourly</option>
                        <option value="Internship">Internship</option>
                        <option value="Yearly">Yearly</option>
                     </select>
                     </div>
                </div>

                {/* 5th row */}
                <div>
                  <label className="block mb-2 text-lg">Require Skill Sets:</label>
                  <CreatableSelect
  defaultValue={selectedOption}
  onChange={handleSelectChange}
  options={options}
  isMulti
  className="create-job-input py-4"
/>
                </div>

                {/* 6th row */}
                <div className="create-job-flex">
                  <div className="lg:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Company Logo</label>
                    <input type="url" 
                    placeholder="Paste your company logo URL: https://weshare.com/img1"
                    {...register("companyLogo")} className="create-job-input" />
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Employment Type</label>
                    <select {...register("employmentType")} className="create-job-input">
                      <option value="">Choose your experience</option>
                      <option value="Full-time">Full Time</option>
                      <option value="Part-time">Part Time</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>

                </div>

                {/* 7th row */}
                <div className="w-full">
                  <label className="block mb-2 text-lg">Job Description</label>
                  <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
                  rows={6}
                  defaultValue={"Ex: We are looking for a web developer to join our team. The ideal candidate will have experience with HTML, CSS, and JavaScript. The candidate will also be responsible for creating and maintaining the website."}
                  placeholder="Job Description"
                  {...register("description")} />
                </div>

                {/* last row */}
                <div className="w-full">
                  <label className="block mb-2 text-lg">Job Posted By</label>
                  <input 
                        type="email"
                        placeholder="Enter your email"
                        {...register("postedBy")}
                        className="create-job-input"
                        />
                </div>

             <input 
                type="submit" 
                className="block mt-12 bg-black text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" 
                />
            </form>
        </div>
    </div>
  );
};

export default CreateJob