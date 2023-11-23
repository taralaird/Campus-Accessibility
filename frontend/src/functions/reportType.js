// value is either "1", "2", "3", "4", 
// returns "Washroom Complaint", "Elevator Complaint",
// "Automatic Door Complaint", or "General Complaint" respectively
export default function reportType(value) {
    const val = String(value);
    if (val==="1") {
        return "Washroom Complaint";
    } else if (val==="2") {
        return "Elevator Complaint";
    } else if (val==="3") {
        return "Automatic Door Complaint";
    } else if (val==="4") {
        return "General Complaint";
    } else {
        return "error";
    }
};
