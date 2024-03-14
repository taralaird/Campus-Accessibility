USE campus_accessibility;
CREATE TABLE Building_Information(
	Buildingid int NOT NULL auto_increment,
	BuildingName varchar(255) NOT NULL,
    NumberOfFloors int,
    NumberofElevators int,
    BarrierFreeWashrooms varchar(1),
    GenderNeutralWashrooms varchar(1),
    AutomaticButtonEntry varchar(1),
    PRIMARY KEY (Buildingid)
);