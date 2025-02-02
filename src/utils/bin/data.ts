export const logo = async (args: string[]): Promise<string> => {
	let message = "";
	message += `<span class="text-[2px] sm:text-[5px] leading-[100%] block">                                                                                                                                                                                                                                                                                                                                                                                                      
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&%///(#%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%#((%&&&&&&&&&&&&
&&&&&&&&&&#/**,*,*,****(%&&&&&&&&&&&&&&%(*.                                                                                                                 .*(%&&&&&&&&&&&&&&&#//**,*,*,*,*(%&&&&&&&&&&
&&&&&&&&&&#/****,********(&&&&&&&&&&%*                  ,///******,.                                                                                             *%&&&&&&&&&&#**,*******,***(%&&&&&&&&&&
&&&&&&&&&&#/****,***,****(&&&&&&&&&&/                   (@@@@@@@@@@@@@@@#.                     ****,                                                              .%&&&&&&&&&(**,***,***,***(%&&&&&&&&&&
&&&&&&&&&&#/****,********(&&&&&&&&&&/                   #@@@@*...,,(&@@@@@@*                  .@@@@#                                                              .%&&&&&&&&&(**,*******,***(%&&&&&&&&&&
&&&&&&&&&&#/*,,,,,,,,,,,*(&&&&&&&&&&/                   %@@@@,        .@@@@@(   /@@@@@@@@&* (@@@@@@@@@*  /@@@@@@@&*                                               .#&&&&&&&&&(*,,,,,,,,,,,,*(%&&&&&&&&&&
&&&&&&&&&&#/****,********(&&&&&&&&&&/                   %@@@@,         .@@@@@.&@@@@@&%&@@@@@@@@@@@@@@@/@@@@@@@@@@@@@&                                 %@@(        .%&&&&&&&&&(**,*******,***(%&&&&&&&&&&
&&&&&&&&&&#/****,***,****(&&&&&&&&&&/                   &@@@@.          @@@@@*****.     /@@@&.,@@@@/  /(((/     .&@@@(                                %@@#        .%&&&&&&&&&(**,***,***,***(%&&&&&&&&&&
&&&&&&&&&&#/****,********(&&&&&&&&&&/                   &@@@@.         *@@@@&  (&@@@@@@@@@@@&.,@@@@/    (&@@@@@@@@@@@#                                #@@%        .%&&&&&&&&&(**,*******,***(%&&&&&&&&&&
&&&&&&&&&&#/**,*,*,*,*,**(&&&&&&&&&&/                   @@@@@.       .%@@@@&.#@@@@#*.   (@@@&.,@@@@*  @@@@@#/,. .@@@@(                                (@@%        .%&&&&&&&&&(**,*,*,*,*,*,*(%&&&&&&&&&&
&&&&&&&&&&#/****,********(&&&&&&&&&&/                   @@@@@@@@@@@@@@@@@@/  &@@@&.   .#@@@@&.,@@@@%,(@@@@*    .&@@@@/                     .&@@,      (@@%        .%&&&&&&&&&(**,*******,***(%&&&&&&&&&&
&&&&&&&&&&#/****,***,****(&&&&&&&&&&/                   @@@@@@@@@@@@@@%*      &@@@@@@@@@&@@@&. (@@@@@@%@@@@@@@@@@@@@@(                   .&@@@%.      /@@&        .%&&&&&&&&&(**,***,***,***(&&&&&&&&&&&
&&&&&&&&&&#/****,********(&&&&&&&&&&/                                                                     ,**,       .                 .&@@@*         /@@&        .%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#**,,,,,,,,,,,*(&&&&&&&&&&/               .%%%##.       ,###(,                                                              /@@@@@@@@@@@@@@@@@@@.       .%&&&&&&&&&(*,,,,,,,,,,,,*(&&&&&&&&&&&
&&&&&&&&&&#*****,********(&&&&&&&&&&/              .@@@@@@@       /@@@@/                %@@@@@.          %@@@@@  %@@@@                 .%@@@&                     .%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#*****,***,****(&&&&&&&&&&/             .@@@@@@@@&      (@@@@*                &@@@@@@&.      %@@@@@@&  %@@@@                    /@@@@*                  .%&&&&&&&&&(**,***,***,***(&&&&&&&&&&&
&&&&&&&&&&#*****,********(&&&&&&&&&&/            .@@@@#.@@@@%     (@@@@*     /%&%(.     &@@@@@@@@%   %@@@@@@@@&  &@@@@                      .&@@%                 .%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#***,*,*,*,*,**(&&&&&&&&&&/           .@@@@%  .@@@@#    #@@@@,   %@@@@@@@@,   &@@@% %@@@@@@@@@%.%@@@& .&@@@@                                            .%&&&&&&&&&(**,*,*,*,*,*,*(&&&&&&&&&&&
&&&&&&&&&&#*****,********(&&&&&&&&&&/          .@@@@%    ,@@@@(   #@@@@,  ,@@@@@@@@@(   @@@@#   &@@@@@%   %@@@% .@@@@@                                            .%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#*****,***,****(&&&&&&&&&&/         .&@@@@((////%@@@@/  %@@@@.   ,@@@@@@@(    @@@@#    .&@#     &@@@% .@@@@@                                            .%&&&&&&&&&(**,***,***,***(&&&&&&&&&&&
&&&&&&&&&&#*****,********(&&&&&&&&&&/        .&@@@@@@@@@@@@@@@@@* %@@@@.                @@@@(            .&@@@% .@@@@@                                            .%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#**,,,,,,,,,,**(&&&&&&&&&&/       .&@@@@          &@@@@,%@@@@.               .@@@@(            .&@@@# .@@@@@,,,,......                                  .%&&&&&&&&&(*,,,,,,,,,,,,*(&&&&&&&&&&&
&&&&&&&&&&#*****,********(&&&&&&&&&&/      .&@@@@.           @@@@@@@@@@.               .@@@@(            .&@@@# ,@@@@@@@@@@@@@@@,                                 .%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#*****,***,****(&&&&&&&&&&/                                                                            .........,,,,,,                                  .%&&&&&&&&&(**,***,***,***(&&&&&&&&&&&
&&&&&&&&&&#*****,********(&&&&&&&&&&/                                                                                                                             ,%&&&&&&&&&(**,*******,***(&&&&&&&&&&&
&&&&&&&&&&#***,*,*,*,*,**(&&&&&&&&&&%*                                                                                                                           *%&&&&&&&&&&(**,*,*,*,*,*,*(&&&&&&&&&&&
&&&&&&&&&&#*****,********%&&&&&&&&&&&&&%#*.                                                                                                                  ,(%&&&&&&&&&&&&&%/*,*******,***(&&&&&&&&&&&
&&&&&&&&&&#*****,***,**/%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#/****,***,***(&&&&&&&&&&&
&&&&&&&&&&#*****,*****(&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(*******,***(&&&&&&&&&&&
&&&&&&&&&&#**,,,,**/#&&&&&&&&&&&&&&&&&&&&&&&&##(//**************************************************************************************************//(##%&&&&&&&&&&&&&&&&&&&&&&&&#**,,,,,,*(&&&&&&&&&&&
&&&&&&&&&&#*****/%&&&&&&&&&&&&&&&%#(/***********,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,********/(#%&&&&&&&&&&&&&&&&#/*****(&&&&&&&&&&&
&&&&&&&&&&#**(%&&&&&&&&&&&&%(/******,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,****/#%&&&&&&&&&&&&#/**(&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&#/*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*****(%&&&&&&&&&&&%%&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&%(***,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,***#&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&%/******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,*******,****(%&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%################################%%%&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    
                                                                                                                                                                                                        </span>`;

	return message;
};

export const banner = (args?: string[]): string => {
	return `
<div class="flex flex-row flex-wrap text-[9px] md:text-xs">
	<span>      ___           ___           ___                 
     /\\  \\         /\\  \\         |\\__\\          ___   
    /::\\  \\       /::\\  \\        |:|  |        /\\  \\  
   /:/\\:\\  \\     /:/\\:\\  \\       |:|  |        \\:\\  \\ 
  /:/  \\:\\__\\   /::\\~\\:\\  \\      |:|__|__      /::\\__\\
 /:/__/ \\:|__| /:/\\:\\ \\:\\__\\ ____/::::\\__\\  __/:/\\/__/
 \\:\\  \\ /:/  / \\/__\\:\\/:/  / \\::::/~~/~    /\\/:/  /   
  \\:\\  /:/  /       \\::/  /   ~~|:|~~|     \\::/__/    
   \\:\\/:/  /        /:/  /      |:|  |      \\:\\__\\    
    \\::/__/        /:/  /       |:|  |       \\/__/    
     ~~            \\/__/         \\|__|                </span>
</div>
반갑습니다. :) 'useradd \<이름\>'을 입력해서 로그인해주세요.

'help'를 입력하시면 여러 기능이 있답니다~!
이스터에그도 있으니 찾아보셔요.
`;
};

export const staff = async (args?: string[]): Promise<string> => {
	let msg = "";

	msg +=
		"성연찬(ai-머신러닝b) : 모든 분들이 각자 맡은 부분에서 너무 준비를 잘해주셔서 놀랐습니다!! 조금만 더 힘내서 잘 마무리했으면 좋겠습니다~\n";
	msg +=
		"김정희(AI 연구) : 일잘러분들과 함께여서 너무너무 행복했습니다!! 데이터 반상회 준비위 최고…! 반상회 잘 끝내고 날잡아서 회식해요\n";
	msg +=
		"김미향(데이터분석b): 뛰뛰~ 비켜주세요 이 자리는 고생을 사서하는 기사님을 위한 예약석입니다. :) 함께 고생할 수 있어서 재밌었습니다!! 마지막까지 화이팅!!\n";
	msg +=
		"임정(데이터분석): 오랜만에 리프레쉬하며 재밌었습니다. 회식는 못참지~~\n";
	msg +=
		"박효주(ai-머신러닝): 준비하는동안 너무 재밌었습니다~ 다들 준비하느라 고생 많으셨어요\n";
	msg +=
		"박인아(데이터분석) : 처음이라 미숙한점이 많았는데 준비위분들 도움 덕분에 반상회 준비가 수월하게 진행될수 있었습니다. 여러분들 덕분에 새롭고 소중한 경험을 맛보게 되네요. 반상회 끝나고 꼭 다시 만나요!\n";
	msg +=
		"김지환(ai-머신러닝b): 별로 한게 없는데 다른 준비위 분들이 너무 일잘러셔서 버스타는 택시운전사가 되어버렸네요 :bus: 다들 고생 많으셨습니다!\n";
	msg +=
		"변성윤(무소속) : 데분, AI, ML, 데엔 각자의 자리에서 하나씩 발전해보아요! 같이 하나씩 나아가요!!\n";
	msg +=
		"정경진(ai-머신러닝) : 준비하는 동안 다들 좋은 분들이셔서 행복했습니다! 고생 많으셨어요 :)";

	return msg;
};

export const timetable = async (args: string[]): Promise<string> => {
	window.open(
		"https://user-images.githubusercontent.com/48194852/246863248-8fe9a3d1-df8e-4c29-8292-a8d1f1a424c0.jpg\n",
	);

	return "Opening Review Form...";
};

export const about = async (args?: string[]): Promise<string> => {
	let message = "";

	message += `\n\n<span class="font-bold">DAXI (Data•Ai taXI) 반상회</span>\n\n`;
	message +=
		"+---------------+--------------------------------+\n" +
		"| 19:05 ~ 19:25 | 입장, 아이스브레이킹                |\n" +
		"+---------------+--------------------------------+\n" +
		"| 19:25 ~ 19:55 | '사내 첫 데이터사이언티스트로서       |\n" +
		"|               | Data Pipeline/ AI 적용기         |\n" +
		"|               | (feat. 고군분투)' - 안민재         |\n" +
		"+---------------+--------------------------------+\n" +
		"| 19:55 ~ 20:25 | '데이터로 뜯어보는 커뮤니티' - 조동민  |\n" +
		"+---------------+--------------------------------+\n" +
		"| 20:25 ~ 20:35 | 쉬는 시간                        |\n" +
		"+---------------+--------------------------------+\n" +
		"| 20:35 ~ 20:55 | 'OO의 장벽을 넘어서:               |\n" +
		"|               | 기계번역 연구개발 후기' - 최민주      |\n" +
		"+---------------+--------------------------------+\n" +
		"| 20:55 ~ 22:15 | 기사들의 수다                     |\n" +
		"+---------------+--------------------------------+\n\n";
	message +=
		"<span class='font-bold'>Q. 예치금은 어디에 쓰이나요?</span>\n" +
		"A. 간단한 저녁식사를 위한 피자 주문과 기념품으로 나눠드릴 굿즈(스티커) 제작에 사용합니다! 따로 납부하지 않으셔도 되고, 참가 신청 시 예치금에서 차감되는 방식입니다.\n\n\n" +
		"<span class='font-bold'>Q. 처음보는 분들이라 어색해요. 어떤 얘기를 하면 좋을까요?</span>\n" +
		"A. 가볍게 할 수 있는 분발자 유형검사를 준비해봤습니다! 옆 사람은 어떤 유형인지 물어보는건 어떨까요? 혹은 각자 어떤 일을 하는지, 지금 어떤 고민을 하고있는지 나눠봐도 좋을 것 같아요.\n\n" +
		"<span class='font-bold'>Q. 발표는 추후에 온라인으로 녹화본을 볼 수 있을까요?</span>\n" +
		"A. 온라인 송출/녹화는 진행하지 않으려고 합니다. 음향 하울링을 방지하기 위한 장비 마련이나, 발표장 사전 답사가 어려웠어요.. 죄송합니다 ㅠ\n\n" +
		"<span class='font-bold'>Q. 반상회를 200% 즐기는 방법은 뭘까요?</span>\n" +
		"A.\n1) 예쁜 이름표와 굿즈를 챙긴다.\n" +
		"2) 명찰을 쓱 ㅡ 훑어보다가 평소 관심있게 본 글을 쓰신 분이 있다면 살며시 다가가 인사한다.\n" +
		"3) 발표에서 궁금한 점은 일단 질문을 남겨둔다.\n" +
		"4) 입간판에서 기념사진을 남긴다.\n" +
		"<span class='font-bold'>5) (중요) 끝까지 자리를 지켜 경품을 받아간다.</span>\n";

	return message;
};
