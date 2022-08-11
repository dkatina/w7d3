

function editCart(action, item, cart){

    switch(action){
        case "add_to_cart":
            return addFunc(item,cart);
        case "remove_from_cart":
            return removeOneFunc(item,cart);
        case "remove_all_from_cart":
            return removeAllFunc(item,cart);
        case "empty_cart":
            let new_cart = [];
            return new_cart;
}
}

const addFunc=(item, cart)=>{
    fresh_cart = cart.slice()
    fresh_cart.push(item)
    return fresh_cart
}

const removeOneFunc=(item,cart)=>{
    fresh_cart = cart.slice()
    for (let i = 0; i < fresh_cart.length; i++){
        if (fresh_cart[i].id == item.id){
            fresh_cart.splice(i,1)
            return fresh_cart
        }
    }
}

const removeAllFunc=(item, cart)=>{
    fresh_cart = cart.filter(object => object.id != item.id)
    return fresh_cart
}

myCart = [{id:1},{id:1},{id:2},{id:2},{id:3},{id:4}]

console.log(editCart('add_to_cart', {id:5}, myCart))
console.log(editCart('remove_from_cart', {id:1}, myCart))
console.log(editCart('remove_all_from_cart', {id:2}, myCart))
console.log(editCart('empty_cart', {id:5}, myCart))
