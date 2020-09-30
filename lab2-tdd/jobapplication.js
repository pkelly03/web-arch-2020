function JobApplicant() {
    this.processApplication = (jobApplicant) => {
        if (jobApplicant.experienceInYears >= 3 && jobApplicant.industry === "hospitality" && jobApplicant.bachelorsDegree === true) {
            return "HIRE";
        } else if (jobApplicant.experienceInYears < 3 && jobApplicant.industry === "hospitality" && jobApplicant.bachelorsDegree === true) {
            return "MAYBE";
        } else {
            return "NOHIRE";
        }
    }
}
module.exports = new JobApplicant();

// const subtract = (a, b) => a - b
