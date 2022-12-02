import {UserType} from "../../types/types";

export const updateObjectInArray = (items: any, itemID: number,
                                    objPropName: string, newObjectProp: {followed: boolean}): Array<UserType> => {
  return items.map(u => {
    if (u[objPropName] === itemID){
      return {...u, ...newObjectProp};
    }
    return u;
  });
};
