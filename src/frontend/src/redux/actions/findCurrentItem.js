export const type = 'findCurrentitem';

const findCurrentitem = graphId =>{
  return{
    type,
    payload: +graphId,
  };
};

export default findCurrentitem;
