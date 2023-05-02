import React from 'react';
import { Dimmer, Loader, SemanticSIZES } from 'semantic-ui-react';

interface Props {
    inverted?: boolean;
    content?: string;
    size?: SemanticSIZES;
}

export default function LoadingComponent({
    inverted = true,
    content = 'Loading...',
    size = 'massive'
}: Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader size={size} content={content} />
        </Dimmer>
    );
}
