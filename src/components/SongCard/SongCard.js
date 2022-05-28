import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './SongCard.styles'

function SongCard({ song }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: song.imageUrl }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <View style={styles.innerTextContainer}>
                    <Text style={styles.artist}>{song.artist}</Text>
                    <Text style={styles.year}>{song.year}</Text>
                </View>
            </View>
            <View style={styles.isSoldOutContainer}>
                {song.isSoldOut && <Text style={styles.isSoldOut}>TÜKENDİ</Text>}
            </View>
        </View>
    )
}

export default SongCard;
