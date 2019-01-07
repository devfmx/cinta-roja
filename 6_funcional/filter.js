const lista = [1,2,3,4,23,412,12,23,523]
const lista2 = [{id:1,name:'Perro'},{id:2,name:'Gato'},{id:3,name:'Caballo'},{id:4,name:'Burro'}]

const filterList = []
for(let i = 0; i < lista2.length; i++){
    if (lista2[i].id > 3){
        filterList.push(lista2[i])
    }
}

console.log(filterList);
console.log('------');

const filterList2 = lista2.filter((element,index,list) => {
    return element.id > 3
});
const filterList3 = lista2.filter(animal => animal.id > 3)

console.log(filterList3);