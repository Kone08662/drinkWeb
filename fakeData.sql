USE [master]
GO
/****** Object:  Database [drinkweb]    Script Date: 2024/2/21 下午 11:24:12 ******/
CREATE DATABASE [drinkweb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'drinkweb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER_2022\MSSQL\DATA\drinkweb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'drinkweb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER_2022\MSSQL\DATA\drinkweb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [drinkweb] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [drinkweb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [drinkweb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [drinkweb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [drinkweb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [drinkweb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [drinkweb] SET ARITHABORT OFF 
GO
ALTER DATABASE [drinkweb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [drinkweb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [drinkweb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [drinkweb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [drinkweb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [drinkweb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [drinkweb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [drinkweb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [drinkweb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [drinkweb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [drinkweb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [drinkweb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [drinkweb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [drinkweb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [drinkweb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [drinkweb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [drinkweb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [drinkweb] SET RECOVERY FULL 
GO
ALTER DATABASE [drinkweb] SET  MULTI_USER 
GO
ALTER DATABASE [drinkweb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [drinkweb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [drinkweb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [drinkweb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [drinkweb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [drinkweb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'drinkweb', N'ON'
GO
ALTER DATABASE [drinkweb] SET QUERY_STORE = ON
GO
ALTER DATABASE [drinkweb] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [drinkweb]
GO
/****** Object:  Table [dbo].[members]    Script Date: 2024/2/21 下午 11:24:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[members](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](80) NOT NULL,
	[password] [varchar](30) NOT NULL,
	[phone] [varchar](40) NULL,
	[address] [varchar](90) NULL,
 CONSTRAINT [PK_members] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product]    Script Date: 2024/2/21 下午 11:24:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[product_name] [varchar](40) NOT NULL,
	[product_name_e] [varchar](80) NOT NULL,
	[capacity] [int] NOT NULL,
	[country] [varchar](50) NOT NULL,
	[category] [varchar](15) NOT NULL,
	[brand] [varchar](50) NOT NULL,
	[market_price] [int] NOT NULL,
	[price] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[alcohol] [decimal](10, 1) NOT NULL,
	[description] [varchar](max) NOT NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[members] ON 

INSERT [dbo].[members] ([id], [email], [password], [phone], [address]) VALUES (1, N'test@gmail.com', N'1234', N'0977823331', N'台北市新光區光復路3段7號8樓')
SET IDENTITY_INSERT [dbo].[members] OFF
GO
SET IDENTITY_INSERT [dbo].[product] ON 

INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (1, N'OMAR 波本花香', N'OMAR SINGLE MALT WHISKY BOURBON TYPE', 700, N'Taiwan 台灣', N'威士忌', N'Omar 威士忌', 1100, 850, 50, CAST(46.0 AS Decimal(10, 1)), N'上層似朝露般清淨的白花香，醞釀著中層曼妙誘人的甘蔗、香草、奶油及蜂蜜香氣，台灣熟成氣候造就出的麥香、當歸和杉木使得香氣更顯穩重而均衡。中等酒體甜順自然，明顯的油脂感帶出香草、牛奶糖、柑橘的中長喉韻，令人深刻而動容。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (3, N'OMAR 雪莉果乾', N'OMAR SINGLE MALT WHISKY SHERRY TYPE', 700, N'Taiwan 台灣', N'威士忌', N'Omar 威士忌', 1300, 950, 50, CAST(46.0 AS Decimal(10, 1)), N'OMAR是蘇格蘭蓋爾語「琥珀」之意，因為台灣氣候炎熱，原酒成熟快，因此威士忌呈現略深的琥珀色。此款採用西班牙雪莉桶陳年，非冷凝過濾以46%酒精度裝瓶，除了雪莉桶原本的花香、果乾香氣，更帶有極有台灣味的香蕉、話梅，甚至檀香氣息，豐富有趣。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (4, N'軒尼詩 VSOP 干邑白蘭地', N'HENNESSY VSOP PRIVILEGE COGNAC', 700, N'France 法國', N'白蘭地', N'Hennessy 軒尼詩', 1680, 1550, 50, CAST(40.0 AS Decimal(10, 1)), N'軒尼詩V.S.O.P.採用法國干邑區的上等白葡萄所釀製，調合60多種來自干邑區四大產區的生命之水而成，琥珀色的酒液中透露淡雅清香，微帶胡椒、丁香及肉桂味，口感香醇順口，適合味道豐富的中西料理。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (5, N'軒尼詩 XO 干邑白蘭地', N'HENNESSY XO COGNAC', 700, N'France 法國', N'白蘭地', N'Hennessy 軒尼詩', 6300, 5800, 20, CAST(40.0 AS Decimal(10, 1)), N'軒尼詩X.O.是由近百種產自「四大酒莊」的生命之水調製而成，其中酒齡最老的將近30年，因而得以賦予本酒款卓越的品質和多變繁複的滋味，主要是因為木頭會釋放出甘寧酸，所以存放於新的利穆贊橡木桶中的時間越長，越能醞釀出濃郁香醇的干邑。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (6, N'路易拉圖 特級園高登格蘭榭紅酒 2020', N'LOUIS LATOUR CORTON GRANCEY GRAND CRU 2020', 750, N'France 法國', N'葡萄酒', N'Louis Latour 路易拉圖', 8400, 5300, 20, CAST(14.5 AS Decimal(10, 1)), N'葡萄品種：黑皮諾

顏色：深紅寶石色澤。

香氣：多種香料的味道，帶點土壤的氣息和黑色小野莓的芳香。

風味：酒體絕美，酒質強勁卻非常優雅，這是黑皮諾品種純淨與高貴的絕佳表現。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (8, N'路易拉圖 特級園高登聖人園紅酒 2020', N'LOUIS LATOUR CORTON GRAND CRU CLOS DE LA VIGNE AU SAINT 2020', 750, N'France 法國', N'葡萄酒', N'Louis Latour 路易拉圖', 7300, 4999, 20, CAST(14.5 AS Decimal(10, 1)), N'葡萄品種：黑皮諾

顏色：外觀出眾，具深紅寶石色澤。

香氣：紅色莓果香與鉛筆芯的香氣交錯。

風味：入口後，如絲般的單寧與柔和的果味相當怡人。餘味具有複雜的肉感卻又優雅而細緻，多元的層次使此款酒令人陶醉，並想耐心等待陳年後的另一番風情。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (9, N'哈瓦那 古巴窖藏3年蘭姆酒', N'HAVANA CLUB 3 ANEJO ESPECIAL', 700, N'古巴', N'調烈酒', N'Havana Club 哈瓦那', 580, 500, 50, CAST(40.0 AS Decimal(10, 1)), N'這款酒產于古巴，並且在古巴儲存了三年之久，包圍它的是溫暖潮濕的氣候以及古巴大師的關懷。 因此這款酒可以用於調配最正宗的古巴雞尾酒——Mojito，並且給予它真正的古巴風味。')
INSERT [dbo].[product] ([id], [product_name], [product_name_e], [capacity], [country], [category], [brand], [market_price], [price], [quantity], [alcohol], [description]) VALUES (10, N'培恩 波爾多陳年龍舌蘭', N'GRAN PATRON BURDEOS ANEJO', 750, N'墨西哥', N'調烈酒', N'Patron Tequila 培恩', 21800, 19500, 20, CAST(40.0 AS Decimal(10, 1)), N'這款純手工釀造的奢華Ａnejo龍舌蘭酒採用Jalisco高地栽種百分百最頂級的藍色龍舌蘭釀製而成。在美國及法國橡木新桶中陳年至少12個月。在將酒置於法國頂級酒莊(“Burdeos”意即西語中的Bordeaux)的陳年Bordeaux橡木桶陳年之前，又再蒸餾一次。這款頂級龍舌蘭酒的口感滑順香甜，酒體結構飽滿均衡，尾韻悠長，帶有橡木、淡淡龍舌蘭、香草及葡萄乾香氣。培恩波爾多陳年龍舌蘭裝呈於美麗的純手工水晶瓶中，並以精美的圓形展示外盒突顯這款珍貴的Ａnejo龍舌蘭酒高雅深沉酒體色澤。')
SET IDENTITY_INSERT [dbo].[product] OFF
GO
USE [master]
GO
ALTER DATABASE [drinkweb] SET  READ_WRITE 
GO
