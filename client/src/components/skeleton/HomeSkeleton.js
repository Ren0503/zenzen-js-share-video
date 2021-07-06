import React from 'react';
import styled from 'styled-components';
import VideoGrid from 'styles/VideoGrid';
import { SkeletonLine, VideoCardSkeleton } from 'styles/Skeleton';

export const StyledHome = styled.div`
    padding: 1.3rem;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 7rem;

    h2 {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 1093px) {
        width: 95%;
    }

    @media screen and (max-width: 1090px) {
        width: 99%;
    }

    @media screen and (max-width: 870px) {
        width: 90%;
    }

    @media screen and (max-width: 670px) {
        width: 99%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (max-width: 530px) {
        width: 100%;
    }
`;

const HomeSkeleton = ({ title }) => {
    return (
        <StyledHome>
            {!title && <SkeletonLine width="350px" height="30px" mb="30px" />}
            {!title && <div style={{ marginTop: "2rem" }} />}
            <VideoGrid>
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
            </VideoGrid>
        </StyledHome>
    );
}

export default HomeSkeleton;