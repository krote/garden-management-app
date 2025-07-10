// ユーザ
export interface User {
    userId: string;
    email: string;
    nickname: string;
    region?: string;
    experienceLevel: 'beginner' | 'intermediate' | 'advanced';
    privacySettings: {
        shareGrowthData: boolean;
        shareRegion: boolean;
        shareNickname: boolean;
    };
    preferences: {
        reminderTime: string;
        weatherNotification: boolean;
    };
    createdAt: string;
    updatedAt: string;
}

// 区画
export interface Area {
    areaId: string;
    userId: string;
    name: string;
    description?: string;
    geometry: {
        type: 'rectangle' | 'polygon' | 'circle';
        coordinates: {
            x: number;
            y: number;
            width: number;
            hegiht: number;
        };
        rotation: number;
        unit: 'meter';
    };
    location: string;
    soilType: string;
    sunlightCondition: 'full_sun' | 'partial_shade' | 'shade';
    notes?: string;
    createdAt: string;
}

// 畝関連
export interface Plot {
  plotId: string;
  areaId: string;
  userId: string;
  name: string;
  geometry: {
    type: 'rectangle';
    coordinates: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    rotation: number;
    unit: 'meter';
  };
  direction: 'east-west' | 'north-south';
  elevation: number;
  pathWidth: number;
  soilCondition: string;
  lastTilled?: string;
  cropHistory: {
    plantId: string;
    season: string;
    endDate: string;
  }[];
  isActive: boolean;
  createdAt: string;
}

// 野菜カテゴリ
export interface PlantCategory {
  categoryId: string;
  name: string;
  nameEn: string;
  category: '果菜類' | '葉菜類' | '根菜類' | 'その他';
  family: string;
  difficulty: 'easy' | 'medium' | 'hard';
  generalInfo: {
    plantingSeason: string[];
    harvestSeason: string[];
    growthPeriod: number;
    sunRequirement: 'full_sun' | 'partial_shade' | 'shade';
    spacing: string;
    companionPlants: string[];
  };
  isOfficial: boolean;
  createdBy: string;
  createdAt: string;
}

// 栽培記録
export interface Garden {
  gardenId: string;
  userId: string;
  areaId: string;
  plotId: string;
  categoryId: string;
  categoryName: string;
  varietyId?: string;
  varietyName?: string;
  plantedDate: string;
  plantingMethod: 'seed' | 'seedling' | 'cutting';
  quantity: number;
  spacing: string;
  status: 'planning' | 'growing' | 'harvested' | 'failed';
  growthStage: 'germination' | 'seedling' | 'vegetative' | 'flowering' | 'fruiting' | 'mature';
  expectedHarvestDate?: string;
  actualHarvestDate?: string;
  totalHarvest: number;
  notes?: string;
  photos: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// 作業ログ
export interface WorkLog {
  logId: string;
  userId: string;
  gardenId: string;
  date: string;
  workType: 'watering' | 'fertilizing' | 'pruning' | 'harvesting' | 'observation' | 'weeding' | 'pest_control';
  description: string;
  duration?: number;
  weather?: {
    condition: string;
    temperature?: number;
    humidity?: number;
  };
  photos: string[];
  harvestAmount?: number;
  nextScheduled?: string;
  createdAt: string;
}

// フォーム用型
export interface CreateAreaForm {
  name: string;
  description?: string;
  location: string;
  soilType: string;
  sunlightCondition: 'full_sun' | 'partial_shade' | 'shade';
  width: number;
  height: number;
  notes?: string;
}

export interface CreatePlotForm {
  areaId: string;
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;
  direction: 'east-west' | 'north-south';
  soilCondition: string;
}

export interface CreateGardenForm {
  plotId: string;
  categoryId: string;
  categoryName: string;
  plantedDate: string;
  plantingMethod: 'seed' | 'seedling' | 'cutting';
  quantity: number;
  spacing: string;
  notes?: string;
}

export interface CreateWorkLogForm {
  gardenId: string;
  date: string;
  workType: 'watering' | 'fertilizing' | 'pruning' | 'harvesting' | 'observation' | 'weeding' | 'pest_control';
  description: string;
  duration?: number;
  harvestAmount?: number;
}