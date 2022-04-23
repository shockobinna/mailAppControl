import axios from 'axios'
const baseAURL = "http://localhost:3000/blocoA";
const baseBURL = "http://localhost:3000/blocoB";
const baseCURL = "http://localhost:3000/blocoC";

export const getBlocoA =({commit}) =>{
    axios.get(baseAURL).then(response =>{
        commit('SET_BLOCOA',response.data)
    })
}

export const getBlocoB =({commit}) =>{
    axios.get(baseBURL).then(response =>{
        commit('SET_BLOCOB',response.data)
    })
}

export const getBlocoC =({commit}) =>{
    axios.get(baseCURL).then(response =>{
        commit('SET_BLOCOC',response.data)
    })
}

export const getEncomendaA =({commit},payload)=>{
 axios.get(`http://localhost:3000/blocoA?apartamento=${payload.x}&&bloco=${payload.y}`)
.then(response =>{
    commit("SET_ENCOMENDAA", response.data)
    console.log(response.data)
})
}

 export const getEncomendaB =({commit},payload)=>{
    axios.get(`http://localhost:3000/blocoB?apartamento=${payload.x}&&bloco=${payload.y}`)
    .then(response =>{
        commit("SET_ENCOMENDAB", response.data)
        console.log(response.data)
    })
    }

export const getEncomendaC =({commit},payload)=>{
        axios.get(`http://localhost:3000/blocoC?apartamento=${payload.x}&&bloco=${payload.y}`)
        .then(response =>{
            commit("SET_ENCOMENDAC", response.data)
            console.log(response.data)
        })
        }

export const postEncomendaA =(context,payload)=>{
    axios.post("http://localhost:3000/blocoA",payload)
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
        // context.commit("getBlocoA", response.data)
        console.log(response.data)
    })
    }

export const postEncomendaB =(context,payload)=>{
    axios.post("http://localhost:3000/blocoB",payload)
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
        // context.commit("getBlocoA", response.data)
        console.log(response.data)
    })
    }

export const postEncomendaC =(context,payload)=>{
    axios.post("http://localhost:3000/blocoC",payload)
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
        // context.commit("getBlocoA", response.data)
        console.log(response.data)
    })
    }

export const updateA =(context,payload)=>{
    axios.put(`http://localhost:3000/blocoA/${payload.id}`,{
        nome: payload.nome,
        apartamento: payload.apartamento,
        quantidade: payload.quantidade,
        bloco: payload.bloco,
        encomenda: [
            {
            data_recebida: payload.encomenda[0].data_recebida,
            codigo: payload.encomenda[0].codigo,
            receptor: payload.encomenda[0].receptor,
            },
        ]
    })
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
         //context.commit("getEncomendaA", response.data)
        console.log(response.data)
    })
    }

export const updateB =(context,payload)=>{
    axios.put(`http://localhost:3000/blocoB/${payload.id}`,{
        nome: payload.nome,
        apartamento: payload.apartamento,
        quantidade: payload.quantidade,
        bloco: payload.bloco,
        encomenda: [
            {
                data_recebida: payload.encomenda[0].data_recebida,
                codigo: payload.encomenda[0].codigo,
                receptor: payload.encomenda[0].receptor,
            },
        ]
    })
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
            //context.commit("getEncomendaA", response.data)
        console.log(response.data)
    })
    }

export const updateC =(context,payload)=>{
    axios.put(`http://localhost:3000/blocoC/${payload.id}`,{
        nome: payload.nome,
        apartamento: payload.apartamento,
        quantidade: payload.quantidade,
        bloco: payload.bloco,
        encomenda: [
            {
                data_recebida: payload.encomenda[0].data_recebida,
                codigo: payload.encomenda[0].codigo,
                receptor: payload.encomenda[0].receptor,
            },
        ]
    })
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
            //context.commit("getEncomendaA", response.data)
        console.log(response.data)
    })
    }

export const deleteA =(context,id)=>{
    // context.commit("DELETE_FROM_A",id)
    axios.delete(`http://localhost:3000/blocoA/${id}`)
    .then( response =>{
        if(response.data.success) 
        console.log(response.data)
    })
    }

export const deleteB =(context,id)=>{
    axios.delete(`http://localhost:3000/blocoB/${id}`)
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
        // context.commit("getBlocoA", response.data)
        console.log(response.data)
    })
    }

export const deleteC =(context,id)=>{
    axios.delete(`http://localhost:3000/blocoC/${id}`)
    .then( response =>{
        if(response.data.success) 
        // commit('SET_BLOCOA',response.data)
        // context.commit("getBlocoA", response.data)
        console.log(response.data)
    })
    }