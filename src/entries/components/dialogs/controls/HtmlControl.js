import React, { Component } from 'react'
import { func, string, bool, oneOfType, instanceOf } from 'prop-types'
import { ControlContainer } from 'src/entries/components/dialogs/ControlContainer'
import { StringModelType } from 'src/lib/types/models/StringModelType'
import { StringSubmodelType } from 'src/lib/types/models/StringSubmodelType'

import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';

export class HtmlControl extends Component {
  static propTypes = {
    model: oneOfType([instanceOf(StringModelType), instanceOf(StringSubmodelType)]).isRequired,
    error: string.isRequired,
    disabled: bool,
    propBtnStatus: string,
    onPropBtnStatusChange: func,
    onItemDelete: func,
    onItemUp: func,
    onItemDown: func,
  }

  static defaultProps = {
    /* if it is object prop */
    disabled: false,
    onPropBtnStatusChange: null,
    propBtnStatus: null,
    /* if it is array item */
    onItemDelete: null,
    onItemUp: null,
    onItemDown: null,
  }

  constructor(props) {
    super(props);
    const contentBlock = htmlToDraft(props.value);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onChange() {
    console.log("on change");
  }

  render() {
    const {
      model,
      error,
      disabled,
      propBtnStatus,
      onPropBtnStatusChange,
      onItemDelete,
      onItemUp,
      onItemDown,
    } = this.props
    return (
      <ControlContainer
        title={model.title}
        description={model.description}
        error={error}
        labels={[model.type]}
        type={model.type}
        noBodyPedding={true}
        disabled={disabled}
        propBtnStatus={propBtnStatus}
        onPropBtnStatusChange={onPropBtnStatusChange}
        onItemDelete={onItemDelete}
        onItemUp={onItemUp}
        onItemDown={onItemDown}
      >
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          onChange={this.onChange}
        />
        {/* <CodeEditor
          onChange={onStringChange}
          onBlur={onBlur}
          language="html"
          initialValue={value}
          disabled={disabled}
        /> */}
      </ControlContainer>
    )
  }
}
