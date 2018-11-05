import React, { Component } from 'react'
import { FlatList, StyleSheet, TouchableOpacity,} from 'react-native';
import { Container, View, Card, CardItem, Right, Text, Body, Icon, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { getData, showDetails } from '../actions/dataActions';
import ImageSlider from '../common/ImageSlider';
import ProgressBar from 'react-native-progress/Bar';


class MainScreen extends Component {
    componentDidMount() {
        this.props.getData();
    }
    renderFlatListItem(item) {
        const { make, model, trim, year, price, addresses, progress, mileage, images } = item;
        //there is a typo in json - urI\urL
        const imagesUrls = images.map(o => o.uri ? o.uri : o.url);
        //console.log(item);
        return (
            <View>
                <ImageSlider
                    images={imagesUrls}
                    style={styles.imageSlider}
                />
                <TouchableOpacity onPress={() => this.props.showDetails(item)}>
                    <Card >
                        <CardItem>
                            <Body>
                                <Text style={styles.priceText}>${price}</Text>
                                <Text>{make} {model} {trim}</Text>
                                <View style={styles.flexDirectionRow}>
                                    <Text style={styles.yearText}>{year}</Text>
                                    <Text>{mileage} miles</Text>
                                </View>
                                <Text>History not available</Text>
                            </Body>
                            <Right>
                                <Icon
                                    name={'md-open'}
                                    style={styles.icon}
                                />
                                <Text>{addresses[0].zipcode}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>Completion Score</Text>
                            </Body>
                            <Right>
                                <Text>{(progress.current / progress.total * 100).toFixed(0)}%</Text>
                            </Right>
                        </CardItem>
                        <ProgressBar
                            progress={progress.current / progress.total}
                            width={null}
                            height={10}
                        />
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        console.log(this.props.data);
        if (this.props.loading) {
            return (
                <View style={styles.noDataContainer}>
                    <Spinner
                        color={'green'}
                    />
                </View>
            );
        }
        if (this.props.data.length < 1) {
            return (
              <View style={styles.noDataContainer}>
                  <Text style={styles.noDataText}>
                      no connection try again
                  </Text>
              </View>
            );
        }
        return (
            <Container>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => this.renderFlatListItem(item)}
                    keyExtractor={(item) => item.id}
                    refreshing={false}
                    onRefresh={() => this.props.getData()}
                />
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    noDataText: {
        fontSize: 20
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    flatListItemContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 7,
        marginBottom: 7
    },
    flatListItemTitle: {
        textAlign: 'center'
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    yearText: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'grey',
        marginRight: 50
    },
    icon: {
        fontSize: 35,
        color: 'black'
    },
    imageSlider: {
        height: 300
    }
});

const mapStateToProps = (state) => {
    const { data, loading } = state.Data;
    return { data, loading };
};

export default connect(mapStateToProps, { getData, showDetails })(MainScreen);