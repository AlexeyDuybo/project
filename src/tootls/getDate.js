const getDate = template=> {
    const date = new Date();
    const days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const months = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const years = date.getFullYear();
    template = template.replace("d",days);
    template = template.replace("m",months);
    template = template.replace("y",years);
    return template;
}
export {
    getDate
}
