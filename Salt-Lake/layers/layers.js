var wms_layers = [];

var format_2015_0 = new ol.format.GeoJSON();
var features_2015_0 = format_2015_0.readFeatures(json_2015_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_0.addFeatures(features_2015_0);
var lyr_2015_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015_0, 
                style: style_2015_0,
                interactive: true,
                title: '<img src="styles/legend/2015_0.png" /> 2015'
            });
var format_2016_1 = new ol.format.GeoJSON();
var features_2016_1 = format_2016_1.readFeatures(json_2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_1.addFeatures(features_2016_1);
var lyr_2016_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_1, 
                style: style_2016_1,
                interactive: true,
                title: '<img src="styles/legend/2016_1.png" /> 2016'
            });
var format_2017_2 = new ol.format.GeoJSON();
var features_2017_2 = format_2017_2.readFeatures(json_2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_2.addFeatures(features_2017_2);
var lyr_2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_2, 
                style: style_2017_2,
                interactive: true,
                title: '<img src="styles/legend/2017_2.png" /> 2017'
            });
var format_2018_3 = new ol.format.GeoJSON();
var features_2018_3 = format_2018_3.readFeatures(json_2018_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_3.addFeatures(features_2018_3);
var lyr_2018_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_3, 
                style: style_2018_3,
                interactive: true,
                title: '<img src="styles/legend/2018_3.png" /> 2018'
            });
var format_2019_4 = new ol.format.GeoJSON();
var features_2019_4 = format_2019_4.readFeatures(json_2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_4.addFeatures(features_2019_4);
var lyr_2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_4, 
                style: style_2019_4,
                interactive: true,
                title: '<img src="styles/legend/2019_4.png" /> 2019'
            });

        var lyr_ESRIGraylight_5 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_salt_lake_tracts_6 = new ol.format.GeoJSON();
var features_salt_lake_tracts_6 = format_salt_lake_tracts_6.readFeatures(json_salt_lake_tracts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_salt_lake_tracts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_salt_lake_tracts_6.addFeatures(features_salt_lake_tracts_6);
var lyr_salt_lake_tracts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_salt_lake_tracts_6, 
                style: style_salt_lake_tracts_6,
                interactive: true,
                title: '<img src="styles/legend/salt_lake_tracts_6.png" /> salt_lake_tracts'
            });
var format_Salt_Lake_County_7 = new ol.format.GeoJSON();
var features_Salt_Lake_County_7 = format_Salt_Lake_County_7.readFeatures(json_Salt_Lake_County_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salt_Lake_County_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salt_Lake_County_7.addFeatures(features_Salt_Lake_County_7);
var lyr_Salt_Lake_County_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salt_Lake_County_7, 
                style: style_Salt_Lake_County_7,
                interactive: false,
                title: '<img src="styles/legend/Salt_Lake_County_7.png" /> Salt_Lake_County'
            });
var group_AutoCrasheswithpedestrians = new ol.layer.Group({
                                layers: [lyr_2015_0,lyr_2016_1,lyr_2017_2,lyr_2018_3,lyr_2019_4,],
                                title: "Auto Crashes with pedestrian(s)"});

lyr_2015_0.setVisible(true);lyr_2016_1.setVisible(true);lyr_2017_2.setVisible(true);lyr_2018_3.setVisible(true);lyr_2019_4.setVisible(true);lyr_ESRIGraylight_5.setVisible(true);lyr_salt_lake_tracts_6.setVisible(true);lyr_Salt_Lake_County_7.setVisible(true);
var layersList = [group_AutoCrasheswithpedestrians,lyr_ESRIGraylight_5,lyr_salt_lake_tracts_6,lyr_Salt_Lake_County_7];
lyr_2015_0.set('fieldAliases', {'objectid': 'objectid', 'year': 'year', });
lyr_2016_1.set('fieldAliases', {'objectid': 'objectid', 'year': 'year', });
lyr_2017_2.set('fieldAliases', {'objectid': 'objectid', 'year': 'year', });
lyr_2018_3.set('fieldAliases', {'objectid': 'objectid', 'year': 'year', });
lyr_2019_4.set('fieldAliases', {'objectid': 'objectid', 'year': 'year', });
lyr_salt_lake_tracts_6.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'statefp10': 'statefp10', 'countyfp10': 'countyfp10', 'tractce10': 'tractce10', 'geoid10': 'geoid10', 'name10': 'name10', 'funcstat10': 'funcstat10', 'intptlat10': 'intptlat10', 'intptlon10': 'intptlon10', 'logrecno': 'logrecno', 'arealand': 'arealand', 'areawatr': 'areawatr', 'pop100': 'pop100', 'hu100': 'hu100', 'p0020001': 'p0020001', 'p0020002': 'p0020002', 'p0020003': 'p0020003', 'p0020004': 'p0020004', 'p0020005': 'p0020005', 'p0020006': 'p0020006', 'p0020007': 'p0020007', 'p0020008': 'p0020008', 'p0020009': 'p0020009', 'p0020010': 'p0020010', 'mtfcc': 'mtfcc', 'p0010011': 'p0010011', 'p0010012': 'p0010012', 'p0010013': 'p0010013', 'p0010014': 'p0010014', 'sqmiles': 'sqmiles', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Salt_Lake_County_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2015_0.set('fieldImages', {'objectid': 'TextEdit', 'year': 'TextEdit', });
lyr_2016_1.set('fieldImages', {'objectid': 'TextEdit', 'year': 'TextEdit', });
lyr_2017_2.set('fieldImages', {'objectid': '', 'year': '', });
lyr_2018_3.set('fieldImages', {'objectid': '', 'year': '', });
lyr_2019_4.set('fieldImages', {'objectid': 'TextEdit', 'year': 'TextEdit', });
lyr_salt_lake_tracts_6.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'statefp10': 'TextEdit', 'countyfp10': 'TextEdit', 'tractce10': 'TextEdit', 'geoid10': 'TextEdit', 'name10': 'TextEdit', 'funcstat10': 'TextEdit', 'intptlat10': 'TextEdit', 'intptlon10': 'TextEdit', 'logrecno': 'TextEdit', 'arealand': 'TextEdit', 'areawatr': 'TextEdit', 'pop100': 'TextEdit', 'hu100': 'TextEdit', 'p0020001': 'TextEdit', 'p0020002': 'TextEdit', 'p0020003': 'TextEdit', 'p0020004': 'TextEdit', 'p0020005': 'TextEdit', 'p0020006': 'TextEdit', 'p0020007': 'TextEdit', 'p0020008': 'TextEdit', 'p0020009': 'TextEdit', 'p0020010': 'TextEdit', 'mtfcc': 'TextEdit', 'p0010011': 'TextEdit', 'p0010012': 'TextEdit', 'p0010013': 'TextEdit', 'p0010014': 'TextEdit', 'sqmiles': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Salt_Lake_County_7.set('fieldImages', {'OBJECTID': 'Range', 'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'Range', 'POP_CURRES': 'Range', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2015_0.set('fieldLabels', {});
lyr_2016_1.set('fieldLabels', {});
lyr_2017_2.set('fieldLabels', {});
lyr_2018_3.set('fieldLabels', {});
lyr_2019_4.set('fieldLabels', {});
lyr_salt_lake_tracts_6.set('fieldLabels', {'pk': 'inline label', 'objectid': 'inline label', 'statefp10': 'inline label', 'countyfp10': 'inline label', 'tractce10': 'inline label', 'geoid10': 'inline label', 'name10': 'inline label', 'funcstat10': 'inline label', 'intptlat10': 'inline label', 'intptlon10': 'inline label', 'logrecno': 'inline label', 'arealand': 'inline label', 'areawatr': 'inline label', 'pop100': 'inline label', 'hu100': 'inline label', 'p0020001': 'inline label', 'p0020002': 'inline label', 'p0020003': 'inline label', 'p0020004': 'inline label', 'p0020005': 'inline label', 'p0020006': 'inline label', 'p0020007': 'inline label', 'p0020008': 'inline label', 'p0020009': 'inline label', 'p0020010': 'inline label', 'mtfcc': 'inline label', 'p0010011': 'inline label', 'p0010012': 'inline label', 'p0010013': 'inline label', 'p0010014': 'inline label', 'sqmiles': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_Salt_Lake_County_7.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Salt_Lake_County_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});