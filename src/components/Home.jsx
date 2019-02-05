import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavDrawer from 'components/NavDrawer';
import CampaignDisplayWrapper from 'components/CampaignDisplayWrapper';
import CampaignDisplay from './CampaignDisplay';
import classes from 'assets/classes';

class Home extends Component {

    componentWillMount = () => {
        const { history, user } = this.props;

        if (!user.username) {
            history.push('/')
        }
        console.log(classes)
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <NavDrawer></NavDrawer>
                <CampaignDisplayWrapper>
                    {user.campaigns.map(campaign => {
                        return <CampaignDisplay key={campaign.campaignName} campaign={campaign}/>
                    })}
                </CampaignDisplayWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Home)