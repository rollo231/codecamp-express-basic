import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql
input CreateBoardInput {
    writer: String,
    title: String,
    contents: String
}

type MyResult {
    number: Int,
    writer: String,
    title: String,
    contents: String
}

type Query {
    fetchBoards : [MyResult]
}

type Mutation {
    createBoard(createBoardInput: CreateBoardInput!): String
}
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        fetchBoards: (parent, args, context, info) => {
            return [
                {number: 1, writer: "lee", title: "hi", contents: "neyo boy"},
                {number: 2, writer: "park", title: "hi", contents: "neyo man"},
                {number: 3, writer: "shu", title: "hi", contents: "neyo girl"}
            ]
        }
    },

    Mutation: {
        createBoard: (_, args) => {
            // 1. 브라우저에서 보내준 데이터 확인하기
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)

            // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

            // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
            return "게시물 등록에 성공하였습니다."
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
});

const {url} = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);