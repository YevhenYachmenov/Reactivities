import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import AcitvityDetailedHeader from "./ActivityDetailedHeader";
import AcitvityDetailedInfo from "./ActivityDetailedInfo";
import AcitvityDetailedChat from "./ActivityDetailedChat";
import AcitvityDetailedSidebar from "./ActivityDetailedSidebar";

function ActivityDetails() {

    const {activityStore} = useStore();
    const {
        selectedActivity: activity,
        loadActivity,
        loadingInitial
    } = activityStore;

    const {id} = useParams();

    useEffect(() => {
        if (id) {
            loadActivity(id);
        }
    }, [id, loadActivity]);

    if (loadingInitial || !activity) {
        return <LoadingComponent content='Loading...' />;
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <AcitvityDetailedHeader activity={activity} />
                <AcitvityDetailedInfo activity={activity} />
                <AcitvityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <AcitvityDetailedSidebar />
            </Grid.Column>
        </Grid>
    );
}

export default observer(ActivityDetails);