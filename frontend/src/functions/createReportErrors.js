import censorStrings from "./censorStrings";

export default function checkReportErrors(title, building, reportType, issueDetails) {
    if (!title || !building || !reportType || !issueDetails) {
        return "error: form is not filled out";
    }
    else if (title.length > 255) {
        return "error: title is too long";
    } 
    else if (issueDetails.length > 1024) {
        return "error: issue details is too long";
    }
    else if (!(reportType==="1" || reportType==="2" || reportType==="3" || reportType==="4")) {
        return "error: select a report type";
    }
    else if (censorStrings(title) || censorStrings(issueDetails)) {
        return "error: coarse language is not allowed";
    } else {
        return "none";
    }

}