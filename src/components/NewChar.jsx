import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharacterInformationPanel from 'components/CharacterInformationPanel';
import AttributesPanel from 'components/AttributesPanel';

class NewChar extends Component {
    render() {
        const { character } = this.props;
        return (
            <div>
                <CharacterInformationPanel character={character}/>
                <AttributesPanel character={character} newChar={true}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        character: state.newChar
    }
}
export default connect(mapStateToProps)(NewChar)