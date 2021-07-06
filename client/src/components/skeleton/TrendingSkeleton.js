import React from 'react';
import styled from 'styled-components';
import { SkeletonLine, TrendingCardSkeleton } from 'styles/Skeleton';

export const StyledTrending = styled.div`
    padding: 1rem 1.3rem;
    width: 85%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 7rem;
    padding-bottom: ${(props) => (props.nopad ? "0.5rem" : "7rem")};

    @media screen and (max-width: 930px) {
        width: 95%;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const TrendingSkeleton = () => {
    return (
        <StyledTrending>
            <SkeletonLine width="350px" height="30px" mt="20px" mb="25px" />

            <SkeletonWrapper>
                <TrendingCardSkeleton className="thumb" mb="20px" mr="20px" />
                <div className="video-info-container">
                    <SkeletonLine width="350px" height="30px" mb="20px" />
                    <SkeletonLine width="300px" height="30px" mb="20px" />
                </div>
            </SkeletonWrapper>

            <SkeletonWrapper>
                <TrendingCardSkeleton className="thumb" mb="20px" mr="20px" />
                <div className="video-info-container">
                    <SkeletonLine width="350px" height="30px" mb="20px" />
                    <SkeletonLine width="300px" height="30px" mb="20px" />
                </div>
            </SkeletonWrapper>

            <SkeletonWrapper>
                <TrendingCardSkeleton className="thumb" mb="20px" mr="20px" />
                <div className="video-info-container">
                    <SkeletonLine width="350px" height="30px" mb="20px" />
                    <SkeletonLine width="300px" height="30px" mb="20px" />
                </div>
            </SkeletonWrapper>
        </StyledTrending>
    );
}

export default TrendingSkeleton;
