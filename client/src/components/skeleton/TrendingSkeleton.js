import React from 'react';
import { StyledTrending } from 'styles/StyledScreen';
import { SkeletonLine, TrendingCardSkeleton } from 'styles/Skeleton';

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
