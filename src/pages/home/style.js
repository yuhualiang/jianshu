import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  float : left;
  padding : 30px 0 0 0;
  box-sizing : border-box;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float : right;
  margin-left : 3%;
  box-sizing : border-box;
  padding-top : 30px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    display: block;
    float: left;
  }
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 20%;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 80%;
  float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
  margin-bottom: 30px;
  margin-top: -4px;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 100%;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;