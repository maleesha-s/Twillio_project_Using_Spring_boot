import axios from 'axios';

const SHOPPINGCART_API_BASE_URL = "http://localhost:8080/api/v1/shoppingcart";
const SHOPPINGITEMS_API_BASE_URL = "http://localhost:8080/api/v1/items";
const SHOPPINGCART_GETBY_ITEMNAME_API_BASE_URL = "http://localhost:8080/api/v1/items/item";


const SHOPPINGCART_PAYMENT = "http://localhost:8080/api/v1/payment";
const SHOPPINGCART_MOBILE_PAYMENT = "http://localhost:8080//api/v1/mobilepay/pay";



const Items_Api_base_URL= "http://localhost:8080/api/v1/items";
const seller_Items_Api_base_URL= "http://localhost:8080/api/v1/items/items";
const User_api_base_URL= "http://localhost:8080/api/v1/user";


const DELIVERY_API_BASED_URL = "http://localhost:8080/api/v1/deliveries"
class ShoppingCartService{
    getOrders(){
        return axios.get(SHOPPINGCART_API_BASE_URL);
    }
    getItems1(){
        return axios.get(SHOPPINGITEMS_API_BASE_URL);
    }
    createOrder(shoppingcart){
        return axios.post(SHOPPINGCART_API_BASE_URL, shoppingcart);

    }
    getItemById(id){
        console.log("ID String"+id);
        return axios.get(SHOPPINGITEMS_API_BASE_URL+ '/' +id);

    }
    deleteOrderById(id){
        return axios.get(SHOPPINGCART_API_BASE_URL+ '/'+id);
    }

    
    addPayment(payment){
        return axios.post(SHOPPINGCART_PAYMENT, payment);
    }
    addMobilePayment(payment){
        return axios.post(SHOPPINGCART_MOBILE_PAYMENT, payment)
    }

    
    getItems(){
        return axios.get(Items_Api_base_URL);
    }

    createitem(item){
        return axios.post(Items_Api_base_URL, item);
    }

    getItemByID(itemid){
        return axios.get(Items_Api_base_URL + '/' + itemid);
    }
    getItemByItemName(name){
        console.log("Item ID is"+name);
        return axios.get(SHOPPINGCART_GETBY_ITEMNAME_API_BASE_URL + '/' +name);
    }

    getitemsbyseller(sellerid){
        return axios.get(seller_Items_Api_base_URL + '/' + sellerid)
    }

    updateitem(item, itemid){
        return axios.put(Items_Api_base_URL + '/' + itemid, item);
    }

    deleteitem(id){
        return axios.delete(Items_Api_base_URL + '/' + id);
    }

    createuser(user){
        return axios.post(User_api_base_URL, user)
    }

    loginuser(email, password){
        return axios.get(User_api_base_URL + '/' + email + '/' + password);
    }
    
    getDeliveryList(){
        return axios.get(DELIVERY_API_BASED_URL);
    }

    viewDeliveryById(id){
        return axios.get(DELIVERY_API_BASED_URL + '/' + id);
    }

    AddDeliveryDetails(delivery){
        return axios.post(DELIVERY_API_BASED_URL, delivery);
    }

    
}

export default new ShoppingCartService();