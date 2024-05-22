type phoneName = string;
type phoneSize = number;
type phoneBuyDate = number;

interface Phone {
    name: phoneName,
    size: phoneSize,
    dateBought: phoneBuyDate
}

const myPhone: Phone = {
    name: 'Samsung',
    size: 20,
    dateBought: 2020
}

console.log(myPhone.name);