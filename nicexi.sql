/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : nicexi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-13 21:06:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'B5玻尿酸高效水', '197.00', '../img/list1.png');
INSERT INTO `list` VALUES ('2', '城野医生化妆水', '162.00', '../img/list2.png');
INSERT INTO `list` VALUES ('3', '城野医生化妆水', '103.00', '../img/list3.png');
INSERT INTO `list` VALUES ('4', '兰蔻 精华肌底乳霜', '819.00', '../img/list4.png');
INSERT INTO `list` VALUES ('5', '雅漾\r\n舒护活泉喷雾', '239.00', '../img/list5.png');
INSERT INTO `list` VALUES ('6', '雪肌精\r\n化妆水', '179.00', '../img/list6.png');
INSERT INTO `list` VALUES ('7', '九朵云\r\n美白去斑面霜', '99.00', '../img/list7.png');
INSERT INTO `list` VALUES ('8', '兰芝\r\n基础护理套装_水衡清盈', '100.00', '../img/list8.png');
INSERT INTO `list` VALUES ('9', '雅诗兰黛\r\nMICRO ESSENCE   肌初赋活原生液', '100.00', '../img/list9.png');
INSERT INTO `list` VALUES ('10', '城野医生\r\nVC100 零毛孔透肌精华水', '10.00', '../img/list10.png');
INSERT INTO `list` VALUES ('11', '碧欧泉\r\n温泉水感爽肤洁肤水', '67.90', '../img/list11.png');
INSERT INTO `list` VALUES ('12', 'HABA\r\n鲨烷精纯美容油', '138.00', '../img/list12.png');
INSERT INTO `list` VALUES ('13', '兰蔻\r\n嫩肌活肤晚霜', '26.00', '../img/list13.png');
INSERT INTO `list` VALUES ('14', '雅诗兰黛', '107.00', '../img/list14.png');
INSERT INTO `list` VALUES ('15', 'DR.BSC', '39.90', '../img/list15.png');
INSERT INTO `list` VALUES ('16', '新水酷特润精华露', '32.80', '../img/list16.png');
INSERT INTO `list` VALUES ('17', '伊丽莎白 · 雅顿', '22.90', '../img/list17.png');
INSERT INTO `list` VALUES ('18', 'B5全面修复霜', '18.90', '../img/list18.png');
INSERT INTO `list` VALUES ('19', '人胎素双干细胞深层焕白淡班导入精华', '21.90', '../img/list19.png');
INSERT INTO `list` VALUES ('20', 'fresh\r\n红茶抗皱紧致系列', '39.00', '../img/list20.png');
INSERT INTO `list` VALUES ('21', 'MINON\r\n氨基酸保湿滋润乳液', '10080.00', '../img/list21.png');
INSERT INTO `list` VALUES ('22', '晶钻蜗牛再生乳液(清爽型)', '240.00', '../img/list22.png');
INSERT INTO `list` VALUES ('23', '芭妮兰\r\n致柔卸妆膏(白藜芦醇)', '382.00', '../img/list23.png');
INSERT INTO `list` VALUES ('24', '瑞士葆丽美', '326.00', '../img/list24.png');
INSERT INTO `list` VALUES ('25', '白金尊贵抗皱活颜眼霜', '47.90', '../img/list25.png');
INSERT INTO `list` VALUES ('26', '科颜氏\r\n牛油果保湿眼霜', '50.00', '../img/list26.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(2) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('26', '', '', null, null);
INSERT INTO `user` VALUES ('10', 'buzhidao', '123123123', null, null);
INSERT INTO `user` VALUES ('4', 'awrweafs', 'asdasdasd', null, null);
INSERT INTO `user` VALUES ('5', 'asdasdasd', '1118d224e96a98bb966f6092fda840ed', null, null);
INSERT INTO `user` VALUES ('6', 'asdretret', 'd41d8cd98f00b204e9800998ecf8427e', null, null);
INSERT INTO `user` VALUES ('7', 'laoxie', 'f5bb0c8de146c67b44babbf4e6584cc0', null, null);
INSERT INTO `user` VALUES ('25', 'kkklll', '123123123', null, null);
INSERT INTO `user` VALUES ('27', 'chenxi', '12345678', null, null);
SET FOREIGN_KEY_CHECKS=1;
