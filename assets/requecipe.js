


    
    function Requecipe(){
       
            const parameters = { query: '', 
                                 count: 12
            };
            const query = Object.keys(parameters).map(key=> key + parameters[key]).join();
            return query;
        }
        this.createQueryString = parameters
        this.createQueryString = function(parameters){}

        this.formatServingTime = function(totalMinutes){
            let totalMinutes= '';
            let hours = Math.floor(totalMinutes/60);
            let minutes = totalMinutes % 60;
            hours = hours < 10 ? '0' + hours :hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ' h' + minutes + ' min';
        }
    }
    const requecipe = new Requecipe ();

    function search(){

    }



