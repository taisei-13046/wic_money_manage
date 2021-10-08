import {
	Box,
	Divider,
	Flex,
	Heading,
	Input,
	Stack
  } from "@chakra-ui/react";
  import { memo, useState } from "react";
  import { PrimaryButton } from "../atmos/buttons/PrimaryButton";

  export const Login = memo(() => {
	const [userCreateName, setUserCreateName] = useState("");
	const [userLoginName, setUserLoginName] = useState("");
	const onChangeCreateUser = (e) =>
		setUserCreateName(e.target.value);
	const onChangeLoginUser = (e) =>
		setUserLoginName(e.target.value);
	return (
	  <Flex align="center" justify="center" height="100vh">
		<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
		  <Heading as="h1" size="lg" textAlign="center">
			WICカジノ
		  </Heading>
		  <Divider my={4} />
		  <Stack spacing={6} py={4} px={10}>
			<Input
			  placeholder="ユーザ名(漢字フルネーム)"
			  value={userCreateName}
			  onChange={onChangeCreateUser}
			/>
			<PrimaryButton
			  disbled={userCreateName === ""}
			>
			新規登録
			</PrimaryButton>
		  </Stack>
		  <Divider my={4} />
		  <Stack spacing={6} py={4} px={10}>
			<Input
			  placeholder="ユーザ名(漢字フルネーム)"
			  value={userLoginName}
			  onChange={onChangeLoginUser}
			/>
			<PrimaryButton
			  disbled={userLoginName === ""}
			>
			  ログイン
			</PrimaryButton>
		  </Stack>
		</Box>
	  </Flex>
	);
  });

