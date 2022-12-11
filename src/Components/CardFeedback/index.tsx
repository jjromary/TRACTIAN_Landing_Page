import { Avatar, CardFeedbackContainer, FeedbackUser, Name, Position, UserContent, ClientsData } from "./styles";

interface CardFeedbackProps {
  avatar: string;
  name: string;
  position: string;
  feedback: string;
}

export default function CardFeedback({ avatar, name, position, feedback }: CardFeedbackProps) {
  return (
    <CardFeedbackContainer>

      <UserContent>
        <Avatar>
          <img src={avatar} />
        </Avatar>

        <ClientsData>
          <Name>
            {name}
          </Name>
          <Position>
            {position}
          </Position>
        </ClientsData>

      </UserContent>

      <FeedbackUser>
        {feedback}
      </FeedbackUser>

    </CardFeedbackContainer>
  )
}