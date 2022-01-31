const baseUrl = 'https://jsonplaceholder.typicode.com';
//take  data from api
export class API_SERVICE {
    static getTodoList({ callback, start = 30, limit = 10  }){
        const url = `${baseUrl}/todos?_start=${start}&_limit=${limit}`;

        fetch(url).then(response => response.json()).then(result =>{
           console.log(result);

           callback(result.map(item =>  {
                item.done = item.completed;
                delete item.completed;
                return item;
           }));
        }).catch(err =>{
            console.log(err.message);
        })
    }
}
export default API_SERVICE;