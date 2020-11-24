import{
    CHANGE_MSG,
    TODO_ADD,
    TODO_CLEAR,
    TODO_REMOVE,
    TODO_TASK
} from '@/store/actionType'

export function changeMsg(payload){
    return{
        type:CHANGE_MSG,
        payload
    }
}

// todo
export function todoAdd(payload){
    return{
        type:TODO_ADD,
        payload
    }
}

export function todoClear(payload){
    return{
        type:TODO_CLEAR,
        payload
    }
}

export function todoRemove(payload){
    return{
        type:TODO_REMOVE,
        payload
    }
}

export function todoTask(payload){
    return{
        type:TODO_TASK,
        payload
    }
}