import censorStrings from "./censorStrings";

export default function checkReportErrors(title, building, reportType, issueDetails) {
    if (!title || !building || !reportType || !issueDetails) {
        return "Submit Error: Form is not fully filled out, please try again";
    }
    else if (title.length > 255) {
        return "Submit Error: Title is too long, please try again";
    } 
    else if (issueDetails.length > 1024) {
        return "Submit Error: Issue details is too long, please try again";
    }
    else if (!(reportType==="1" || reportType==="2" || reportType==="3" || reportType==="4")) {
        return "Submit Error: Please select a report type and try again";
    }
    else if (censorStrings(title) || censorStrings(issueDetails)) {
        return "Submit Error: Coarse language is not allowed";
    } else {
        return "none";
    }

}