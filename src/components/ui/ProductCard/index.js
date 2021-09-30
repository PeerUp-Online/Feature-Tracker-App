import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Caption, Subheading, Chip } from "react-native-paper";
import theme from "../../../theme";
const ProductCard = (props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Card.Cover style={styles.img} source={{ uri: `${props.cover}` }} />
        <Card.Content style={styles.content}>
          <Title>{props.name}</Title>
          <Caption>{props.url}</Caption>
          <Subheading>{props.featureCount} Upcoming Features</Subheading>
          <Subheading>{props.completedCount} Features Completed</Subheading>
        </Card.Content>
      </View>
      <View style={styles.chipContainer}>
        <Chip
          style={styles.chip}
          icon="feather"
          mode="outlined"
          selectedColor={theme.colors.primary}
        >
          {props.requestCount} Request
        </Chip>
        <Chip
          style={styles.chip}
          icon="vote"
          mode="outlined"
          selectedColor={theme.colors.primary}
        >
          {props.voteCount} Votes
        </Chip>
        <View>
          <Text style={{ color: theme.colors.accent }}>Created at</Text>
          <Caption style={{ color: theme.colors.primary }}>
            {props.date}
          </Caption>
        </View>
      </View>
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
  },
  container: {
    flexDirection: "row",
  },
  img: {
    width: 100,
    maxHeight: 100,
    borderRadius: 8,
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  chip: {
    margin: 2,
  },
});
