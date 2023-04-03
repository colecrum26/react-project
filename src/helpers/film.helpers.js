
export function filterFilmsByDirector(list, director){
    if (director) return list.filter((film) => film.director == director);
    else return list;
};

// export function getListOf(list, prop) {
//     return [...new Set(list.map((film) => film[prop] || ""))];
// }

export function getListOf(list, prop){
return list.reduce((uniqueValue, item) => {
    if (uniqueValue.indexOf(item[prop]) == -1) {
        uniqueValue.push(item[prop]);
    }
    return uniqueValue;
},[]);
};

export function getFilmStats(list){
let acc_score = 0;
const total = list.length;

let acc = list.reduce((acc, curr) => acc + parseInt(curr.rt_score), 0)
let avg_score = acc / list.length;

let latest = 0;
list.forEach((film) => {
    if (latest < film.release_date){
        latest == film.release_date;
    }
});

return {
    avg_score,
    acc_score,
    total,
    latest,
}
};