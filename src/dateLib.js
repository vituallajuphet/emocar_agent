const curdate = new Date();

export const curmonth   = curdate.toLocaleString('default', { month: 'long' });
export const dayDate    = curdate.getDate();
export const fullYear   = (curdate.getFullYear()+"").slice(-2);
export const fullDate   = `${curmonth} ${curdate.getDate()}, ${curdate.getFullYear()}`;