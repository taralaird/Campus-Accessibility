import censorStrings from "./censorStrings";

export default function checkReportErrors(title, building, reportType, issueDetails) {
    console.log(title);
    console.log(building);
    console.log(reportType);
    console.log(issueDetails);
    if (!title || !building || !reportType || !issueDetails) {
        return "error: form is not filled out";
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