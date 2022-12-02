import {connect} from 'react-redux';

import {compose} from 'redux';

import {WithAuthRedirect} from '../../HOC/withAuthRedirect';
import {sendMessageActionCreator, SendMessageActionCreatorType} from '../Redux/dialogs-reducer';
import {AppStateType} from '../Redux/Redux-store';

import Dialogs from './Dialogs';
import {DialogsDataType, MessagesType} from "../../types/types";



type MapStateToPropsType = {
  dialogsData: Array<DialogsDataType>
  messages: Array<MessagesType>
}

type MapDispatchToPropsType = {
  sendMessage: (string) => SendMessageActionCreatorType
}

const mapStateToProps = (state: AppStateType)=>{
  return{
    dialogsData: state.dialogPage.DialogsData,
    messages: state.dialogPage.Messages
  };
};

export default compose(
  WithAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(mapStateToProps, {
    sendMessage: sendMessageActionCreator
  })
)
(Dialogs);
