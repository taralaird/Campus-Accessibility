/*  this function takes the number of reports a building has (count),
    an optional boolean determining if the button should have an outline,
    an optional number determining how many counts a button can have before it's yellow,
    and an optional number determining how many counts a button can have before it's red.
    NOTE: ensure greenCutoff < yellowCutoff
    it returns a string of either "success" || "outline-success" 
    || "warning" || "outline-warning" || "danger" || "outline-danger"
    this function is meant to be used when generating props for buttons on the map page
 */
export default function buttonVariant(count, greenCutoff=2, yellowCutoff=4) {
    let reportCount = Number(count);
        if (reportCount < greenCutoff && reportCount < yellowCutoff) {
            return "outline-info";
        } else if (reportCount < yellowCutoff) {
            return "outline-warning";
        } else {
            return "outline-danger";
        }
        /*
        if (reportCount < greenCutoff && reportCount < yellowCutoff) {
            return "rgb(31,30,81)";
        } else if (reportCount < yellowCutoff) {
            return "rgb(247,236,27)";
        } else {
            return "rgb(236,37,94)";
        }
        */
};