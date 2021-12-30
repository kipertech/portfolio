import React from 'react';
import { View, Text, Image } from "../components";

// Assets
import mainImage from '../images/image_phat.jpg';

const ScreenHello = () => {
    return(
        <View style={{ height: '100%', backgroundColor: '#4A90E2', alignItems: 'center', justifyContent: 'center' }}>
            {/* Container */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Image */}
                <Image
                    source={mainImage}
                    altText={'screen1_mainImage'}
                    style={{ width: 185, height: 185 }}
                    borderRadius={185 / 2}
                />

                {/* Text */}
                <View style={{ alignItems: 'flex-start', marginLeft: 32 }}>
                    <Text style={{ fontSize: 30, color: '#EEECEC' }}>
                        Hi there,
                    </Text>

                    <Text style={{ fontSize: 50, color: '#FFFFFF', fontWeight: 'bold' }}>
                        I'm Phat
                    </Text>
                </View>
            </View>
        </View>
    )
};

export default ScreenHello;
