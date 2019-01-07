const lista = [1,2,3,4,23,412,12,23,523]
const lista2 = [{id:1,name:'Perro'},{id:2,name:'Gato'},{id:3,name:'Caballo'},{id:4,name:'Burro'}]

const nameList = []
for(let i = 0; i < lista2.length; i++){
    nameList.push(lista2[i].name)
}
console.log(nameList);

console.log('------');
const nameList2 = lista2.map((element,index,list) => {
    return element.name
})

const nameList3 = lista2.map((element) => element.name)
console.log(nameList3);