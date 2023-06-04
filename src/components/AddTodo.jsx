import { Button, HStack,Input,useToast } from "@chakra-ui/react"
import { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({addTodo}) => {

  const [content, setContent] = useState("")
  const toast = useToast()
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!content){
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return
    }
    
    const todo ={
      id: nanoid(),
      body: content
    };

    addTodo(todo)
    setContent("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="todo" value={content} onChange={(event)=> setContent(event.target.value)}/>
        <Button colorScheme="pink" px="8" type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}

export default AddTodo