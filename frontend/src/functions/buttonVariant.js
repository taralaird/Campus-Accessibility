/*  this function takes the number of reports a building has (count),
    an optional boolean determining if the button should have an outline,
    an optional number determining how many counts a button can have before it's yellow,
    and an optional number determining how many counts a button can have before it's red.
    NOTE: ensure greenCutoff < yellowCutoff
    it returns a string of either "success" || "outline-success" 
    || "warning" || "outline-warning" || "danger" || "outline-danger"
    this function is meant to be used when generating props for buttons on the map page
 */
export default function buttonVariant(count, isOutline=false, greenCutoff=1, yellowCutoff=3) {
    let reportCount = Number(count);
    if (isOutline) {
        if (reportCount < greenCutoff && reportCount < yellowCutoff) {
            return "outline-success";
        } else if (reportCount < yellowCutoff) {
            return "outline-warning";
        } else {
            return "outline-danger";
        }
    } else {
        if (reportCount < greenCutoff && reportCount < yellowCutoff) {
            return "success";
        } else if (reportCount < yellowCutoff) {
            return "warning";
        } else {
            return "danger";
        }
    }
};