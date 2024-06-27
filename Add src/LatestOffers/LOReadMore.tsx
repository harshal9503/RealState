import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';


const LOReadMore = () => {
    const [showBrokerOffer, setShowBrokerOffer] = useState(false);

    const toggleBrokerOffer = () => {
        setShowBrokerOffer(!showBrokerOffer);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={require('../../assets/a.png')}
                    style={styles.banner}
                />
                <Text style={styles.projectTitle}>Nicco Residency</Text>
                <View style={styles.buttons}>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Download eBrochure</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={toggleBrokerOffer}>
                            <Text style={styles.buttonText1}>View Broker Offer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText1}>Site Visit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject1}>
                        <View style={styles.texticon}>

                            <Octicons name="project" size={24} color="black" style={styles.icon} />

                            <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                                About Project :
                            </Text>
                        </View>
                        <Text style={styles.aboutProjectText}>
                            Nicco Residency is a brand-new residential complex that offers
                            opulent 2, 3, and 4 BHK lifestyle homes with the 25,000 Sq ft
                            newest amenities. The Nicco Residency is a tastefully constructed
                            residence with all the conveniences required for a comfortable
                            stay in Mumbai’s JVLR Andheri East neighborhood. In this complex,
                            discover a distinctive way of living. Three towers are present on
                            this well-built property, each offering a unique value.
                        </Text>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight1}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                            <Text style={styles.highlightTitle}>Configuration:</Text>
                            <Text style={styles.highlightText}>2 BHK, 3 BHK & 4 BHK</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.projectHighlight}>
                    <View style={styles.aboutProject1}>
                        <View style={styles.projectHighlight2}>
                        <Octicons name="project" size={24} color="black" style={styles.icon} />
                            <Text style={styles.highlightTitle}>Project Highlight:</Text>
                        </View>

                        <View style={styles.highlightList}>
                            <View style={styles.highlightItem}>
                            <Octicons name="project"  color="black" style={styles.icon} />
                                <Text style={styles.highlightText}>
                                    It has all well-equipped modern amenities
                                </Text>
                            </View>
                            <View style={styles.highlightItem}>
                                <Text style={styles.highlightText}>
                                    Luxurious 2, 3 & 4 BHK Balcony Residences
                                </Text>
                            </View>
                            <View style={styles.highlightItem}>
                                <Text style={styles.highlightText}>
                                    3 Wings with G+23 storeyed
                                </Text>
                            </View>
                            <View style={styles.highlightItem}>
                                <Text style={styles.highlightText}>
                                    Multi-tier safety and security system
                                </Text>
                            </View>
                            <View style={styles.highlightItem}>
                                <Text style={styles.highlightText}>
                                    Smart Location Connectivity
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Project Budget:</Text>
                            </View>

                            <Text style={styles.highlightText}>2.27 Cr Onwards</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Projects Possession:</Text>
                            </View>
                            <Text style={styles.highlightText}>
                                As Per Rera: December 2026 || Developer Commitment: July 2026
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Construction Status:</Text>
                            </View>

                            <Text style={styles.highlightText}>12th-slab-compleleted</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Amenities:</Text>
                            </View>

                            <View style={styles.amenitiesContainer}>
                                <View style={styles.amenity}>
                                <Octicons name="project" size={24} color="black" style={styles.icon} />
                                    <Text style={styles.amenityText}>Cctv</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Earth-Quake-Resistant</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>
                                        Fire-Fighting-Equipment
                                    </Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Fire-Sprinklers</Text>
                                </View>
                                <View style={styles.amenity}>
                                <Octicons name="project" size={24} color="black" style={styles.icon} />
                                    <Text style={styles.amenityText}>Gazebo</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Grand-Entrance-Lobby</Text>
                                </View>
                                <View style={styles.amenity}>
                                <Octicons name="project" size={24} color="black" style={styles.icon} />
                                    <Text style={styles.amenityText}>Gymnasium</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Indoor-Games-Area</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Jogging-Track</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Kids-Play-Area</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Landscaped-Garden</Text>
                                </View>
                                <View style={styles.amenity}>
                                <Octicons name="project" size={24} color="black" style={styles.icon} />
                                    <Text style={styles.amenityText}>Lift</Text>
                                </View>
                                <View style={styles.amenity}>
                                <Octicons name="project" size={24} color="black" style={styles.icon} />
                                    <Text style={styles.amenityText}>Lounge</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Meeting-Room</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Multipurpose-Court</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Multipurpose-Hall</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Senior-Citizen-Area</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Star-Gazing-Deck</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Swimming-Pool</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Terrace-Garden</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Wifi</Text>
                                </View>
                                <View style={styles.amenity}>
                                    <Text style={styles.amenityText}>Yoga-Room</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Floor Plans:</Text>
                            </View>

                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.floorPlansContainer}>
                                <View style={styles.floorPlans}>
                                    <Image
                                        source={require('../../assets/a.png')}
                                        style={styles.floorPlan}
                                    />
                                    <Text style={styles.floorPlanText}>2 BHK</Text>
                                </View>

                                <View style={styles.floorPlans}>
                                    <Image
                                        source={require('../../assets/a.png')}
                                        style={styles.floorPlan}
                                    />
                                    <Text style={styles.floorPlanText}>2 BHK</Text>
                                </View>
                                <View style={styles.floorPlans}>
                                    <Image
                                        source={require('../../assets/a.png')}
                                        style={styles.floorPlan}
                                    />
                                    <Text style={styles.floorPlanText}>3 BHK</Text>
                                </View>
                                <View style={styles.floorPlans}>
                                    <Image
                                        source={require('../../assets/a.png')}
                                        style={styles.floorPlan}
                                    />
                                    <Text style={styles.floorPlanText}>3 BHK</Text>
                                </View>
                                <View style={styles.floorPlans}>
                                    <Image
                                        source={require('../../assets/a.png')}
                                        style={styles.floorPlan}
                                    />
                                    <Text style={styles.floorPlanText}>3 BHK</Text>
                                </View>
                                <View style={styles.floorPlans}>
                                    <Image
                                        source={require('../../assets/a.png')}
                                        style={styles.floorPlan}
                                    />
                                    <Text style={styles.floorPlanText}>4 BHK</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Unit Size:</Text>
                            </View>

                            <Text style={styles.highlightText}>
                                2 BHK: 772, 785 & 826 Sqft || 3 BHK: 1002, 1129 & 1228 Sqft || 4
                                BHK: 1671 Sqft
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Project Location:</Text>
                            </View>

                            <Text style={styles.highlightText}>
                                Address: Nicco Residency, Poonam Nagar, JVLR, Andheri East,
                                Mumbai - 400060 Maharashtra India
                            </Text>
                            <Image
                                source={require('../../assets/a.png')}
                                style={styles.map}
                            />
                            <TouchableOpacity style={styles.getDirections}>
                                <Text style={styles.getDirectionsText}>Get Directions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                              <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Location Highlight:</Text>
                            </View>
                            <View style={styles.highlightList}>
                                <View style={styles.highlightItem}>
                                <Octicons name="project"  color="black" style={styles.icon} />
                                    <Text style={styles.highlightText}>
                                        Nicco Residency Is Ideally Connected To The Best The City Has To
                                        Offer
                                    </Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>
                                        Matoshri Sports Club: - 0.4 Km
                                    </Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>Nds Hospital: - 1.0 Km</Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>Infinity Mall: - 4.8 Km</Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>Oberoi School: - 0.5 Km</Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>
                                        Western Express Highway: - 1.9 Km
                                    </Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>Oberoi Mall: - 5.9 Km</Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>
                                        Shyan Nagar Police Station: - 0.9 Km
                                    </Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>
                                        Jogeshwari Metro Station: - 2.1 Km
                                    </Text>
                                </View>
                                <View style={styles.highlightItem}>
                                    <Text style={styles.highlightText}>
                                        International Airport: - 7.9 Km
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>RERA Number:</Text>
                            </View>

                            <Text style={styles.highlightText}>P51800050433</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutProject}>
                    <View style={styles.aboutProject2}>
                        <View style={styles.projectHighlight}>
                            <View style={styles.projectHighlight2}>
                            <Octicons name="project" size={24} color="black" style={styles.icon} />
                                <Text style={styles.highlightTitle}>Developer Details:</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Image
                        source={require('../../../assets/a.png')}
                        style={styles.niccoLogo}
                    />
                    <Text style={styles.highlightText}>
                        NICCO is the brainchild of Mr. Ashok Shah. Since its inception in
                        1972, various innovative approaches have been taken sin...
                    </Text> */}
                    <TouchableOpacity style={styles.viewWebsite}>
                    <Octicons name="project" size={24} color="black" style={styles.icon} />
                        <Text style={styles.viewWebsiteText}>View Website</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    visible={showBrokerOffer}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowBrokerOffer(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Broker Offer</Text>
                            <Text style={styles.modalText}>Cp Offer</Text>
                            <Text style={styles.modalText}>1-2 Deal: 2%</Text>
                            <Text style={styles.modalText}>3-5 Deal Onwards: 2.25%</Text>
                            <Text style={styles.modalText}>5 Deal & Above: 2.50%</Text>
                            <Text style={styles.modalText}>
                                Duration: 1st June 24 Till 31st December 2024x
                            </Text>
                            <Text style={styles.modalText}>Client Offer</Text>
                            <Text style={styles.modalText}>
                                Developer Subvation: 30:70, Pay 30% Now & Rest on Possession.
                            </Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setShowBrokerOffer(false)}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <View style={styles.container5}>
                <TouchableOpacity style={styles.button5}>
                    <MaterialIcons name="star-border" size={24} color="black" />
                    <Text style={styles.text1}>I'm Interested</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonYellow}>
                    <MaterialIcons name="call" size={24} color="black" />
                    <Text style={styles.textYellow}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonYellow}>
                    <MaterialIcons name="share" size={24} color="black" />
                    <Text style={styles.textYellow}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    backArrow: {
        width: 24,
        height: 24,
        marginRight: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    banner: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 16,
    },
    buttons: {
        padding: 16,
        marginTop: -20,
    },
    button: {
        backgroundColor: '#fdd700',

        padding: 5,
        borderRadius: 25,
        // marginBottom: 8,
        alignItems: 'center',
    },
    button1: {
        backgroundColor: '#282828',
        padding: 5,
        borderRadius: 25,
        // marginBottom: 8,
        margin: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
    },
    buttonContainer1: {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',

        marginTop: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    buttonText1: {
        color: '#fdd700',
        fontWeight: 'bold',
    },
    texticon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    aboutProject: {
        padding: 16,
    },
    aboutProject1: {
        padding: 16,
        backgroundColor: 'white',
        marginTop: -15,

    },
    aboutProject2: {
        marginTop: -15,
        backgroundColor: 'white',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    aboutProjectText: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 15,
    },
    projectHighlight1: {
        padding: 16,

        // borderBottomWidth: 1,
        // borderBottomColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',

    },
    projectHighlight2: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    projectHighlight: {
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#f0f0f0',
    },
    highlightTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        

    },
    highlightText: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 20,
        
    },
    highlightList: {
        marginTop: 8,
    },
    highlightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    amenitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    amenity: {
        width: '33.33%',
        padding: 8,
        marginBottom: 8,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    amenityIcon: {
        width: 24,
        height: 24,
        marginBottom: 4,
    },
    amenityText: {
        fontSize: 14,
        textAlign: 'center',
        alignItems: 'center',
    },
    // projectHighlight3: {
    //     padding: 10,
    // },
    highlightTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    floorPlansContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    floorPlans: {
        alignItems: 'center',
        marginRight: 15,
    },
    floorPlan: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    floorPlanText: {
        marginTop: 5,
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginTop: 8,
    },
    getDirections: {
        backgroundColor: '#ff9800',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    getDirectionsText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    niccoLogo: {
        width: 50,
        height: 50,
        marginTop: 8,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    viewWebsite: {
        backgroundColor: '#ff9800',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        flexDirection: 'row',
    },
    globeIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    viewWebsiteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 10,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFD700', // Yellow background
        paddingVertical: 10,

    },
    button5: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        marginHorizontal: 5,
        width: 170,
        height: 40,
        paddingLeft: 20

    },
    buttonYellow: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#FFD700', // Yellow background
        // padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 5,
        color: 'black',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10


    },
    text: {
        marginLeft: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    textYellow: {
        marginLeft: 5,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default LOReadMore;