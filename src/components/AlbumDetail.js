import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, albumImageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}> 
                    <Image //images must be styled to show height/width in react-native*
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                        />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>        
            </CardSection>

            <CardSection>
                <Image 
                    style={albumImageStyle} 
                    source={{ uri: image }} 
                    />
            </CardSection>

            <CardSection>
                <Button purchaseLink={url} />
            </CardSection>

        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
        
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;