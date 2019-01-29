import React from 'react';
import {H5PContext} from "../../../context/H5PContext";
import './SceneSelector.scss';
import {ActiveSceneRow} from "./Row/ActiveSceneRow";
import ExpandedSceneSelector from "./ExpandedSceneSelector";

export default class SceneSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  render() {
    const scenes = this.context.params.scenes;
    const activeScene = scenes.find(scene => {
      return scene.sceneId === this.props.currentScene;
    });

    const sceneSelectorClasses = ['h5p-scene-selector'];
    if (!activeScene) {
      sceneSelectorClasses.push('disabled');
    }

    return (
      <div className='scene-selector-wrapper'>
        <div
          className={sceneSelectorClasses.join(' ')}
          onClick={this.props.toggleExpand.bind(this)}
        >
          <div className='h5p-select-content'>
            <ActiveSceneRow
              scene={activeScene}
              simpleView={true}
            />
          </div>
          <div className='h5p-select-handle'/>

        </div>
        {
          this.props.isExpanded &&
          <ExpandedSceneSelector
            startScene={this.props.startScene}
            currentScene={this.props.currentScene}
            setStartScene={this.props.setStartScene}
            changeScene={this.props.changeScene}
            editScene={this.props.editScene}
            deleteScene={this.props.deleteScene}
          />
        }
      </div>
    );
  }
}

SceneSelector.contextType = H5PContext;