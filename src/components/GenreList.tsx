import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} py='5px'>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
