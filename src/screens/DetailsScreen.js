import React, { Component } from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Card, CardItem, Icon, Item, Text, View } from 'native-base';
import { connect } from 'react-redux';

class DetailsScreen extends Component {

    render() {
        const { images, price, trim, transmission, mileage, addresses, owner, phone  } = this.props.detailsItemData;
        return (
            <ScrollView>
                <Card>
                    <CardItem header>
                        <Text>Listing Details</Text>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Price</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto' }]}>{price}$</Text>
                                <Icon
                                    name={'chevron-thin-right'}
                                    type={'Entypo'}
                                />
                            </View>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Fotos</Text>
                                <Text
                                    style={[styles.priceText, { marginLeft: 'auto' }]}
                                >
                                    {images.length} Photo{images.length > 1 && 's'}
                                </Text>
                                <Icon
                                    name={'chevron-thin-right'}
                                    type={'Entypo'}
                                />
                            </View>
                        </Item>
                    </CardItem>
                    <CardItem header>
                        <Text>Vehicle Details</Text>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Trim</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto' }]}>{trim}</Text>
                                <Icon
                                    name={'chevron-thin-right'}
                                    type={'Entypo'}
                                />
                            </View>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Features</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto', color: 'blue' }]}>Add features</Text>
                                <Icon
                                    name={'chevron-thin-right'}
                                    type={'Entypo'}
                                />
                            </View>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Transmission</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto'}]}>{transmission}</Text>
                                <Icon
                                    name={'chevron-thin-right'}
                                    type={'Entypo'}
                                />
                            </View>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Mileage</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto'}]}>{mileage} miles</Text>
                            </View>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Zip Code</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto'}]}>{addresses[0].zipcode}</Text>
                            </View>
                            <Icon
                                name={'chevron-thin-right'}
                                type={'Entypo'}
                            />
                        </Item>
                    </CardItem>
                    <CardItem header>
                        <Text>Contact info</Text>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Email</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto'}]}>{owner.email}</Text>
                            </View>
                            <Icon
                                name={'chevron-thin-right'}
                                type={'Entypo'}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <View style={styles.itemContainer}>
                                <Text style={styles.priceText}>Phone</Text>
                                <Text style={[styles.priceText, { marginLeft: 'auto'}]}>{phone}</Text>
                            </View>
                            <Icon
                                name={'chevron-thin-right'}
                                type={'Entypo'}
                            />
                        </Item>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 16,

    },
});

const mapStateToProps = (state) => {
    const { detailsItemData } = state.Data;
    return { detailsItemData };
};

export default connect(mapStateToProps, {})(DetailsScreen);