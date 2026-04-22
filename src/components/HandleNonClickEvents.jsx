import React from 'react'

const HandleNonClickEvents = () => {
   const onClicked =() => {
      console.log("Clicked")
   }
   const onhover =() => {
      console.log("On Mouse Hover");
   }
   function ondoubleclicked(){
      console.log("Double clicked");
   }
   function onchanged (e) {
      console.log(e.target.value);
   }


  return (
    <div>
      <button className='p-2 mt-2' onClick={() => onClicked()}>Click me</button>
      <p className='p-2 mt-2' onMouseOver={onhover}>On Mouse hover</p>
      <h1 className='h-4 w-5 p-2 mt-2' onDoubleClick={ondoubleclicked}>Double click</h1>
      <input onChange={(e) => onchanged(e)} type="text" />
    </div>
  )
}

export default HandleNonClickEvents;
