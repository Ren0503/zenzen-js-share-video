import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'styles/Button';
import { client } from 'utils/fetch';
import { addChannel, removeChannel } from 'reducers/user';
import { toggleSubscribeSearchResult } from 'reducers/search';
import { toggleSubscribeChannelRecommendation } from 'reducers/channel';
import { addChannelLocalSt, removeChannelLocalSt } from 'utils/localStorage';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;

    .avatar-channel {
        display: flex;
        align-items: center;
    }

    .subscribe-channel {
        display: flex;
        align-items: center;
    }

    .description {
        width: 90%;
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        object-fit: cover;
        margin-right: 1.2rem;
    }

    p span:first {
        padding-right: 0.6rem;
    }

    @media screen and (max-width: 580px) {
        font-size: 0.9rem;

        button {
            font-size: 0.9rem;
        }

        img {
            width: 100px;
            height: 100px;
            border-radius: 50px;
        }
    }

    @media screen and (max-width: 510px) {
        p.description {
            display: none;
        }
    }

    @media screen and (max-width: 450px) {
        img {
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
    }

    @media screen and (max-width: 420px) {
        .to-hide {
            display: none;
        }
    }
`;

const ChannelInfo = ({ search, channel }) => {
    const dispatch = useDispatch();

    const handleSubscribe = (channel) => {
        if (search) {
            dispatch(toggleSubscribeSearchResult(channel.id));
        }

        dispatch(toggleSubscribeChannelRecommendation(channel.id));
        dispatch(addChannel(channel));
        addChannelLocalSt(channel);
        client(`${process.env.REACT_APP_BE}/users/${channel.id}/toggleSubscribe`);
    };

    const handleUnSubscribe = (channelId) => {
        if (search) {
            dispatch(toggleSubscribeSearchResult(channelId));
        }

        dispatch(toggleSubscribeChannelRecommendation(channel.id));
        dispatch(removeChannel(channelId));
        removeChannelLocalSt(channelId);
        client(`${process.env.REACT_APP_BE}/users/${channel.id}/toggleSubscribe`);
    };

    return (
        <Wrapper>
            <Link to={`/channel/${channel.id}`} className="avatar-channel">
                <img src={channel.avatar} alt="Avatar" />

                <div className="channel-info-meta">
                    <h3>{channel.username}</h3>

                    <p className="secondary">
                        <span>{channel.subscribersCount} subscribers</span>
                        <span className="to-hide">•</span>
                        <span className="to-hide">{channel.videosCount} videos</span>
                    </p>

                    {channel.channelDescription && (
                        <p>
                            {channel.channelDescription?.length < 65
                                ? channel.channelDescription
                                : channel.channelDescription?.substr(0, 65)}
                        </p>
                    )}
                </div>
            </Link>

            {!channel.isMe && !channel.isSubscribed && (
                <Button
                    onClick={() => handleSubscribe({
                        id: channel.id,
                        username: channel.username,
                        avatar: channel.avatar,
                    })}
                >
                    Subscribe
                </Button>
            )}

            {!channel.isMe && channel.isSubscribed && (
                <Button grey onClick={() => handleUnSubscribe(channel.id)}>
                    Subscribed
                </Button>
            )}
        </Wrapper>
    );
}

export default ChannelInfo;